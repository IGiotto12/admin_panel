import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET method: fetch all users
export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

// POST method: create a new user
export async function POST(req: NextRequest) {
  const { email, name } = await req.json()
  const user = await prisma.user.create({
    data: { email, name },
  })
  return NextResponse.json(user)
}
