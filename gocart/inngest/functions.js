import { inngest } from './client'

// Inngest Function to save user data to a database

export const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-create'},
    {event: 'clerk/user.created'},
    async ({event}) => {
        const {data} = event
        await prisma.user.create({
            data: {
                id: data.id,
                email: data.email_address,
                name: `${data.first_name} ${data.last_name}`,
                image: data.image_url,
            }
        })
    }

)

//Inngest Function to update user data in database

export const syncUserUpdation = inngest.createFunction(
    
)