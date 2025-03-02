import { User } from "@/type";
import type { Metadata } from "next";

export const metaData : Metadata = {
    title:"Users"
}


import React from 'react'
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";

export default async function UsersPage() {
    const usersData : Promise<User[]> = getAllUsers();
    const users = await usersData;
    const content  = (
        <section>
            <h2>
                <Link href="/">
                    Back to Home
                </Link>
            </h2>
            <br/>
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}> 
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </p>
                        <br/>
                    </>
                    
                    )
                    
                
            })}
        </section>

    )
  return (
    <div>{content}</div>
  )
}
