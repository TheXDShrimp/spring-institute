import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    console.log(name, email);

    // Check if email already exists in the database
    const existingUser = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      console.log(`User with email ${email} already exists`);
      res.json({ exists: true });
    } else {
      // Insert new user
      const newUser = await prisma.users.create({
        data: {
          ...req.body,
        },
      });

      console.log(`New user created: ${JSON.stringify(newUser)}`);
      res.json({ exists: false, user: newUser });
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }

  return res;
}
