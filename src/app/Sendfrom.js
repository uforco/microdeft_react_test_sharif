"use client"

export default function Sendfrom () {



    const sendproduct = (e) => {
        e.preventDefault()


        const formvlu = e.target


        console.log(formvlu)

        axios.post('https://react-interview.1putym.easypanel.host/api/product', {
             title : "Example product",
            stock : "50",
            price : "6500",
            email : "srka780@gmail.com",
            discount : "500"
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


    }


    return (
        <form onSubmit={sendproduct} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
          </div>
          <div className="mb-5">
            <label for="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">stock</label>
            <input type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>


          <div className="mb-5">
            <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
            <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>

          <div className="mb-5">
            <label for="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">discount</label>
            <input type="number" id="discount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
         
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}