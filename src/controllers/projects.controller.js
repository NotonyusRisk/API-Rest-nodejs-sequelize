const getProjects = async (req, res) => {
  res.send("Getting all projects");
};

const createProject = async (req, res) => {
  res.send("Creating a new project");
};

const updateProject = async (req, res) => {
  res.send(`Updating project with ID: ${req.params.id}`);
};

const deleteProject = async (req, res) => {
  res.send(`Deleting project with ID: ${req.params.id}`);
};

const getProjectById = async (req, res) => {
  res.send(`Getting project with ID: ${req.params.id}`);
};

export {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
};
