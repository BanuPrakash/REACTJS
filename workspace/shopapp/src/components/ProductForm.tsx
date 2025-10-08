import axios from 'axios';
import React, { useRef, useState } from 'react'

// // controlled Component
// export default function ProductForm() {
//   // Single Source of Truth
//   let [title, setTitle] = useState<string>("");
//   let [price, setPrice] = useState<number>(0);
//   let [description, setDescription] = useState<string>("");

//   function doSubmit() {
//     let product = {
//       title,
//       price,
//       description,
//       image: "../assets/react.svg"
//     }

//     axios.post("http://localhost:1234/products", product).then(response => {
//       console.log(response.data);
//     })
//   }
//   return (
//     <div>
//       <h1>ProductForm</h1>
//       <form>
//         <div>
//           <label htmlFor="name">Title</label>
//           <input type="text" id="name" name="name" onChange={(evt) => setTitle(evt.target.value)}/>
//         </div>
//         <div>
//           <label htmlFor="price">Price</label>
//           <input type="number" id="price" name="price" onChange={(evt) => setPrice(+evt.target.value)}/>
//         </div>
//         <div>
//           <label htmlFor="description">Description</label>
//           <textarea id="description" name="description" onChange={(evt) => setDescription(evt.target.value)}></textarea>
//         </div>
//         <button type="button" onClick={doSubmit}>Add Product</button>
//       </form>
//     </div>
//   )
// }


// Uncontrolled Version 1
// export default function ProductForm() {
//   // in class component we use createRef instead of useRef
//   let titleRef = useRef<HTMLInputElement>(null);
//   let priceRef = useRef<HTMLInputElement>(null);
//   let descRef = useRef<HTMLTextAreaElement>(null);

//   function doSubmit() {
//     let product = {
//       title: titleRef?.current?.value,
//       price: priceRef?.current?.value,
//       description: descRef?.current?.value,
//       image: "../assets/react.svg"
//     }

//     axios.post("http://localhost:1234/products", product).then(response => {
//       console.log(response.data);
//     })

//   }
//     return (
//     <div>
//       <h1>ProductForm</h1>
//       <form>
//         <div>
//           <label htmlFor="name">Title</label>
//           <input type="text" id="name" name="name" ref={titleRef}/>
//         </div>
//         <div>
//           <label htmlFor="price">Price</label>
//           <input type="number" id="price" name="price" ref={priceRef}/>
//         </div>
//         <div>
//           <label htmlFor="description">Description</label>
//           <textarea id="description" name="description" ref={descRef}></textarea>
//         </div>
//         <button type="button" onClick={doSubmit}>Add Product</button>
//       </form>
//     </div>
//   )
// }

// let objectRef = useRef<any>({title: "", price: 0, description: ""});


// Uncontrolled Version 2
export default function ProductForm() {
  
  function doSubmit(formData: FormData) {
    let product = {
      title: formData.get("title"),
      price: formData.get,
      description: formData.get("description"),
      image: "../assets/react.svg"
    }

    axios.post("http://localhost:1234/products", product).then(response => {
      console.log(response.data);
    })

  }
    return (
    <div>
      <h1>ProductForm</h1>
      <form action={doSubmit}>
        <div>
          <label htmlFor="name">Title</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price"/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" ></textarea>
        </div>
        <button type="submit" >Add Product</button>
      </form>
    </div>
  )
}
