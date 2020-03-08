const format = (error: Error): string => {
  switch (error.name) {
    case "TaskNotFound":
    case "UserNotFound":
      return JSON.stringify({ error: error.message });
    default:
      return JSON.stringify({ message: "unexpected error", name: error.name });
  }
};

export { format };
