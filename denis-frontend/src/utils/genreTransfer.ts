function transformGenre(genre: string): string {
  if (genre === "horror") {
    return "Хоррор";
  } else if (genre === "rpg") {
    return "Ролевая игра";
  } else {
    return "Н/Д";
  }
}

export default transformGenre;
