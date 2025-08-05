import { Project } from "../models/Project.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  res.send(`Updating project with ID: ${req.params.id}`);
};

const deleteProject = async (req, res) => {
  try {
    await Project.destroy({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
};
