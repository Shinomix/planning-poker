const format = (error: Error): string => {
  switch (error.name) {
    case "TaskNotFound":
      return JSON.stringify(error.message);
    default:
      return JSON.stringify({ message: "unexpected error", name: error.name });
  }
};

export { format };
