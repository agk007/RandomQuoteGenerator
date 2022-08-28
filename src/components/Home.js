import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, filterRandom, addBookmark } from "../redux";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import Header from "./Header";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


let a = [];

function Home({ bmId, userData, fetchUsers, filterRandom, addBookmark }) {

  

  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [drop, setDrop] = useState();
  const handleChange = (e, val) => {
    a = [...a, val.name];
  };
  const removeChange = (e, val) => {
    a = a.filter((v) => v !== val.name);
  };

  useEffect(() => {
    fetchUsers();
    dropdown();
  }, []);

  const dropdown = async () => {
    setLoading(true);
    try {
      const result = await axios.get("https://api.quotable.io/tags");
      setDrop(result.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <>
    <Header />
    <div className="animate__animated animate__fadeInLeft">
      
    


      <div class=" px-4">
        <div

        id="card"
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
          <div class="text-center">
            <div class="absolute top-4 mb-10 right-4 ">
              {!bmId.includes(userData._id) && (
                <button
                  title="Bookmark"
                  onClick={(e) => {
                    addBookmark(userData._id);
                    
                    setBookmarked(true);

                  }}
                >
                  

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
              {bmId.includes(userData._id) && (
                <button title="Bookmarked">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w- h-8"
                  >
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93zM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 013.75 21z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          <div class="w-full text-2xl mb-10 font-normal">
           " {userData.content} "

            <br></br>
            
          </div>
        <div class="w-full text-lg font-bold bottom">
              ~{userData.author}
            </div>
        </div>
      </div>

      <div class=" max-w-[19rem]  justify-center
          items-center
          
          mx-auto p-6">
        <Multiselect
          options={drop}
          onSelect={handleChange}
          onRemove={removeChange}
          singleSelect
          displayValue="name"
          placeholder=""
          style={{
            
            searchBox: {
              "justify-content":"center",
              background:"#d9d9d9",
              border:"none",
              borderRadius:"30px"
            },
            chips: {

              background: "indigo",
              color:"white"
            },
            multiselectContainer: {
              color: "purple",
            },
            option: { 
              

             
              },
            
          }}
        />
      </div>
      
                       <ToastContainer position="top-right"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
      
      <button  className="max-w-xl bg-[#009c51] py-3  px-10 text-xl tracking-wide rounded-[3em]"
        onClick={() => {
          a === undefined || a.length == 0 ? fetchUsers() : filterRandom(a);
        }}
      >
        Next Quote
      </button>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.users,
    bmId: state.bookmark.bookmarked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    filterRandom: (a) => dispatch(filterRandom(a)),
    addBookmark: (id) => {dispatch(addBookmark(id));toast.success("Added to Bookmark", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,});},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
