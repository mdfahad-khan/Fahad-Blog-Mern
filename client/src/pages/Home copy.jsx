import { Link } from "react-router-dom";
import CallToAction from "../Components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";
import { motion } from "framer-motion";

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 4,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const textVariants1 = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const textVariants2 = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "4%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};
const sliderVariants1 = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-4%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2,
    },
  },
};

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="bg-[#E4E5D7] dark:bg-[#10172A] min-h-[90vh]">
      <motion.div
        className=" w-full  hidden md:block "
        variants={sliderVariants}
        initial="initial"
        whileInView="animate"
      >
        <img
          src="/upwork.png" // Adjust the path based on your project structure
          alt="about"
          className="w-16 h-16 rounded-full ml-3 opacity-50    "
          width={16} // Set your desired width
          height={16} // Set your desired height
        />

        <div className=" w-16 h-16 opacity-50  rounded-full ml-auto mr-5 mt-10 ">
          <img
            src="/Facebook.png" // Adjust the path based on your project structure
            alt="about"
            className="  w-20 h-16 top-5 "
            width={16} // Set your desired width
            height={16} // Set your desired height
          />
        </div>
        <img
          src="/github.png" // Adjust the path based on your project structure
          alt="about"
          className="w-16 h-16 rounded-full mt-10 ml-3 opacity-50   "
          width={24} // Set your desired width
          height={24} // Set your desired height
        />
        <div className=" w-16 h-16 rounded-full opacity-50  ml-auto mr-5 mt-10 ">
          <img
            src="/bootstrap.png" // Adjust the path based on your project structure
            alt="about"
            className="  w-20 h-20 top-5 "
            width={16} // Set your desired width
            height={16} // Set your desired height
          />
        </div>
      </motion.div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-xl mx-auto text-center ">
        <h1 className="text-2xl font-bold lg:text-4xl">Welcome to My Blog</h1>
        <p className="text-gray-500 lg:text-2xl font-semibold sm:text-sm">
          Create a Modern Personal Blog Website That Will Surely Be a Sight to
          Behold!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
