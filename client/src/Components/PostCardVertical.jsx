import React from "react";
import { Link } from "react-router-dom";

const PostCardVertical = ({ post }) => {
  const truncateContent = (content, maxLength) => {
    if (!content) return ""; // Handle case where content is empty or undefined
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };
  return (
    <div className="group flex flex-row relative gap-5  border w-full   h-[220px] overflow-hidden  transition-all">
      <div>
        <Link to={`/post/${post.slug}`}>
          <img
            src={post.image}
            alt="post cover"
            className="h-[200px] mt-2 ml-2 w-[220px] hover:scale-105 object-cover  transition-all duration-300 z-20"
          />
        </Link>
      </div>
      <Link to={`/post/${post.slug}`}>
        <div className="p-3 flex flex-col gap-1 w-full">
          <div className="flex justify-between p-3  mx-auto w-full max-w-full text-md">
            <div className="flex gap-2">
              <span className="text-[10px] mt-1.5 md:mt-0 md:text-[13px]">
                {post && new Date(post.createdAt).toLocaleDateString()}
              </span>{" "}
              -
              <span className="italic text-[10px] mt-1.5 md:mt-0 md:text-[13px] text-blue-[#14385E] font-semibold">
                {post.category}
              </span>
            </div>

            <span className="italic text-[10px] mt-1.5 md:mt-0 md:text-[13px]">
              {post && (post.content.length / 1000).toFixed(0)} comments
              {console.log(post.content.length)}
            </span>
          </div>
          <p className=" text-[12px] md:text-[18px] font-bold line-clamp-2 ">
            {post.title}
          </p>
          <div className="text-[11px] md:text-[14px] pl-3 max-w-3xl mx-auto w-full post-content">
            {post && (
              <p
                dangerouslySetInnerHTML={{
                  __html: truncateContent(post.content, 100),
                }}
              />
            )}
          </div>

          <button className="button1 w-32 h-8 justify-center items-center content-center text-sm  absolute">
            <span className="text-[16px] ml-4 hover:text-white ">
              Read article
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PostCardVertical;
