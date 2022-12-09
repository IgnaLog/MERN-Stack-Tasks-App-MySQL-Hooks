import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const taskSchema = Yup.object().shape({
  title: Yup.string().trim().required("Title required!"),
  description: Yup.string().trim().required("description required!"),
});

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        validationSchema={taskSchema}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          isSubmitting,
          touched,
          errors,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : "Create Task"}
            </h1>
            <label className="block mt-3 font-bold text-base">Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
              className="px-2 py-1 rounded-sm w-full"
            />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <label className="block mt-3 font-bold text-base">Description:</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
              className="px-2 py-1 rounded-sm w-full"
            />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md mt-3"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
