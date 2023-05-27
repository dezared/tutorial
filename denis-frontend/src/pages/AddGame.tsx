import { Button, Container, TextField } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

import { useAddGameMutation } from "../redux/api";

const AddGame = (): JSX.Element => {
  const [addGame, { isError, error, isSuccess }] = useAddGameMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error.data.error);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      toast.info("Вы успешно создали игру");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      genre: "",
      imageUrl: "",
      metaRaitng: 0,
    },
    onSubmit: (values) => {
      addGame(values);
    },
  });

  return (
    <Container className="!mx-auto !w-3/4 mt-5">
      <p className="mb-5 font-semibold">Создание игры: </p>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 mb-5">
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Название игры"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <TextField
          fullWidth
          id="description"
          name="description"
          label="Развёрнутая ифнормация о игре"
          multiline
          rows={5}
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        <TextField
          fullWidth
          id="genre"
          name="genre"
          label="Жанр игры"
          value={formik.values.genre}
          onChange={formik.handleChange}
        />

        <TextField
          fullWidth
          id="imageUrl"
          name="imageUrl"
          label="Ссылка на постер игры"
          placeholder="https://..."
          value={formik.values.imageUrl}
          onChange={formik.handleChange}
        />

        <TextField
          fullWidth
          id="metaRaitng"
          name="metaRaitng"
          type="number"
          label="Рейтинг игры"
          value={formik.values.metaRaitng}
          onChange={formik.handleChange}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Создать
        </Button>
      </form>
    </Container>
  );
};

export default AddGame;
