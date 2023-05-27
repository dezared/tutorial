/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container, TextField } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

import { useEditGameMutation, useGetSingleGameQuery } from "../redux/api";
import type { Game } from "../redux/models/GameTypes";

const EditGame = (): JSX.Element => {
  const params = useParams();
  const id = params.id as string;

  const { data: game } = useGetSingleGameQuery(id, {
    pollingInterval: 3000,
    refetchOnMountOrArgChange: false,
    skip: false,
  });

  const [editGame, { isError, error, isSuccess }] = useEditGameMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(error.data);
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      toast.info("Вы успешно обновили игру");
      navigate(`/game/${id}`);
    }
  }, [isSuccess, navigate]);

  const formik = useFormik({
    initialValues: game as Game,
    onSubmit: (values) => {
      values.id = Number(id);
      editGame(values);
    },
  });

  return (
    <>
      {game && (
        <>
          <Container className="!mx-auto !w-3/4 mt-5">
            <p className="mb-5 font-semibold">Создание игры: </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-3 mb-5"
            >
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

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Обновить
              </Button>
            </form>
          </Container>
        </>
      )}
    </>
  );
};

export default EditGame;
