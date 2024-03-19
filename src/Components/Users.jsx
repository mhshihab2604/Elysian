import { useLoaderData } from "react-router-dom";

import User from "./User"
const Users = () => {
    const users = useLoaderData();
    return (
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl font-medium mx-2">Our Product: {users.length}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        users.map(user => <User key={user.id} user={user}></User>)
                    }
                </div>
            </div>
    );
};

export default Users;