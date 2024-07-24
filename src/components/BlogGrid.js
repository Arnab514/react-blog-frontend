import React from 'react';

const BlogGrid = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 border border-gray-300 rounded">
          <h2 className="mb-2 text-xl font-bold">{blog.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose" />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
