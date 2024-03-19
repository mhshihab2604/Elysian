const User = ({user}) => {
    const{id, product_name, brand, image} = user;
    return (
        <div className="mx-2">
            <div className="card card-compact w-80 bg-[#c0a5f7] shadow-xl pt-4">
            <figure><img className="w-[350px] h-[350px] rounded-xl" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">Product Name: {product_name}</h2>
                    <p className="text-lg font-medium">Brand: {brand}</p>
                    <p className="text-lg"><small>Id: {id}</small></p>
                </div>
            </div>
        </div>
    );
};

export default User;