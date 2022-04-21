import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {

    return (
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1' >



            <SingleBlog
                blogQuestion={'What is Semantic Tag in HTML?'}
                blogText={
                    "আমরা যখন  HTML  কোড ইউজ করি তখন ঐটা একটা মিনিংফুল হতেও পারে আবার নাও হতে পারে কোন একটা ডিজাইনের সাপেক্ষে  এর সাপেক্ষে। যেমন আমরা প্যারাগ্রাফ লেখার ক্ষেত্রে <p> tag ইউজ করতে পারি আবার নরমাল কোন div tag ইউজ করতে পারি, তাদেরকে কাস্টমাইজ করে CSS দিয়ে আমরা সেইম ভাবেই রিপ্রেজেন্ট করতে পারি <p> tag এ। যেমন আমরা <header> Tag ইউজ করে হেডার লিখতে পারি বা কোন <div> Tag ইউজ করে same কাজটা সম্পন্ন করতে পারি। কিন্তু এই কাজগুলা User এবং Browser এর সাথে মিনিংফুল না। কারণ অন্ন একজন  দেখেলে তখন এ কাজগুলো বুঝবে না কোনটা কি কাজর ।  সে বুঝবে না যে Code লিখেছে তারে বাদে। তাই বলা হয় Semantic ইউজ করার জন্য ,মানে যেখানে হেডার দরকার সেখানে Header Tag use করা । আর যেখানে Navigation menu দরকার সেখানে <nav> Tag ইউজ করা।  যেখানে ফুটার দরকার সেখানে <footer> Tag ইউজ করা হবে না করে । আর এই মিনিংফুল ট্যাগগুলিকে Semantic Tag বলা হয়।"
                }
            ></SingleBlog>

            <SingleBlog

                blogQuestion={'What is the difference between inline and Block Element?'}
                blogText={
                    `এ দুইটা Tag নিয়ে বিগিনার লেভেলের স্টুডেন্টদের সবথেকে বেশি আটকে যায় । এই দুইটা Tag সিমিলার মনে হলেও একটু থেকে ট্রিকি। চলেন আমরা ট্যাগ Tag সম্পর্কে বিস্তারিত জানি। Block Element:-> Block element  সময় একটা নিউ লাইন দিয়ে স্টার্ট হবে। মানে আগে যা কিছুই থাকুক সবকিছুর পর একটা নিউ লাইন দিয়ে তারপরে সে ওই এরিয়াতে বসবে। এবং Block Element এর জন্য ব্রাউজার অটোমেটিকলি কিছু margin করবে ওই এলিমেন্ট এর আগে এবং পরে। সবথেকে important যেটা হলো Block Element সবসময় Full Width টা নিয়ে নেবে তার parent এরিয়ার consider the it's own height। মানে Block element তার ডানে এবং বামে অন্য কোন elemnet/Tag কে বসতে দিবে না। left and Right এর সম্পূর্ণ এরিয়াটা সে একাই নিয়ে নেবে।  Inline Element:-> Inline Element Block Element থেকে different। Inline Element কোনো নেক্সট লাইন বা নতুন লাইন দিয়ে  তার অবস্থান শুরু করে না। Inline Element সব সময় ততটুকুই জায়গা নিবে যতটুকু জায়গা তার ভিতরের Element বা Text  গুলোর জন্য প্রয়োজন। মানে Inline Element এর পাশাপাশি আরো অন্য কোন Element/Tag বসা যাবে।সে Block Element এর মতন সম্পূর্ণ উইথ বা তার ডানে-বামে যতটুকু এরিয়া আছে সবটুকু জায়গা নিবে না, তার যতটুকু প্রয়োজন ততটুকুই জায়গা নেবে। Inline Element ডানে-বামে আরো অন্য কোন Element/Tag বসানো যাবে । আমরা চাইলে Inline Element কেউ Block Element এ কনভার্ট করতে পারি আবার Block Element কেউ Inline Element এ কনভার্ট করতে পারি CSS এর মাধ্যমে। Here are the block-level elements in HTML:  <address><article><aside><blockquote><canvas><dd><div><dl><dt> . Here are the inline elements in HTML:   <a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map>`
                }
            ></SingleBlog>
            <SingleBlog

                blogQuestion={'What is Context API and Purpose?'}
                blogText={
                    `The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. `
                }
            ></SingleBlog>
        </div >
    );
};

export default Blogs;