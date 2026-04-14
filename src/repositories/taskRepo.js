import prisma from '../config/db.js';

export async function findAll(completed) {
  // If completed filter is provided, build a where clause
  if (completed !== undefined) {
    return prisma.task.findMany({
      where: {
        completed: completed,
      },
    });
  }

  // If no filter, return all tasks
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
