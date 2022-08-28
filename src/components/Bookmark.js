import React from 'react'
import Header from './Header'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { delBookmark } from '../redux'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Bookmark(props) {
  const [quotes,SetQuotes]=useState([])
  

useEffect(() => {
  
  const exec = async () => {
    const response = await Promise.all(props.bookmarked.map(id => {
      return axios.get('https://api.quotable.io/quotes/'+id)
    }))
    
    SetQuotes(response);
  };
   
  
    exec();


}, [props.bookmarked])





  return (
    <>
      <Header/>
      

      {props.bookmarked.length==0 && <p className="mt-20 center text-xl font-bold">Your Bookmark List is Empty 😶</p>}
      <div class="animate__animated animate__fadeInRight relative p-4 mb-12">
      {quotes.map(item=>{
        return (
        <><div
        class="
        
        justify-center
        items-center
        mt-20
        mx-auto
        max-w-2xl
        rounded-xl
        my-5
        p-16
        bg-[#d05252]
        relative
        "
      >
        <div class="">
  <div class="absolute top-4 right-4 ">
    
  <button  onClick={e=>{props.delBookmark(item.data._id);toast.warn("Removed from Bookmark")}} title="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
</svg>

  </button>

   
</div>
</div>
      <div class="w-full text-2xl mb-10 font-normal">
       "  {item.data.content }  "
          
          <br></br>
          
      </div>
      <div class="w-full text-lg font-bold bottom">
              ~{item.data.author}
            </div>

      </div></>)
      })}
      </div>
      <footer class="absolute mt-2">
     
      </footer>
      <ToastContainer hideProgressBar
 autoClose={2000} />
      </>

   
  )
}

const mapStateToProps = state => {
  return {
    bookmarked: state.bookmark.bookmarked
  }
}
const mapDispatchToProps = dispatch => {
  return {
    delBookmark: (id) =>{ dispatch(delBookmark(id))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark)


