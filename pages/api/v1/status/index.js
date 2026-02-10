function status(request, response) {
  response
    .status(200)
    .json({ status: "Os alunos do curso.dev são acima da media!" });
}

export default status;
