module.exports = {
  content: ["*html",
            "./nav/resume/*html"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('/image/backgrounds/grass1.jpg')",
      },
      fontFamily:{
        notCSans:"'NotCourierSans', sans-serif",
        notCSansBold:"'NotCourierSansBold', sans-serif"
      }
      
    },
  },
  plugins: [
  ],
};
