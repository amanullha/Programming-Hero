import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div className='qsns-list'>
            <div className='qsn-container'>
                <h1 className='qsn'>How React works?</h1>
                <p>React কিভাবে কাজ করে তা জানার আগে React কি তা আগে আমাদেরকে জানতে হবে|
                    <br></br>
                    <br></br>
                    <strong>What is React?</strong>
                    <br></br>
                    <strong>React</strong> is a <strong> javascript library</strong> for building <strong> user interfaces</strong>. লাইব্রেরী বলতে বুঝায় এখানে কিছু ফাংশন থাকবে, কিছু ক্লাস থাকবে যেগুলো আমাকে হেল্প করবে কোন একটা tasks পারফর্ম করার জন্য। tasks টা এমন হতে পারে যে ইউজার ইন্টারফেস বিল্ড করা। সো এখন ইউজার ইন্টারফেস কি? ইউজার ইন্টারফেস হচ্ছে যেটা ইউজার একটা ওয়েবসাইটে এন্টার করে এক্সপেরিয়েন্স করবে। মানে ইউজার একটা ওয়েবসাইটে এন্টার করে যে কাজগুলো করবে, যেই ব্রাউজারের মাধ্যমে কাজগুলো করবে ওইটার ইন্টারফেইস টাইম হচ্ছে  ইউজার ইন্টারফেস।
                    সেন্ড কাস্টিং রিঅ্যাক্টর মাধ্যমে কম্পোনেন্ড দিয়ে করা যায়।
                    <br></br>
                    <br></br>
                    <strong>what is component?</strong>
                    <br></br>
                    <strong>Components</strong> are the building blocks of any <strong>React</strong> application. মানে পুরা একটা অ্যাপ্লিকেশন কে ছোট ছোট ব্লকে ভাগ করার পর যে ব্লক গুলো পাবো ঔ ব্লকগুলোকে আমরা কম্পনেন্ট বলে থাকি। আবার একটা <strong>Components</strong> এর ভিতরেও আরো অনেকগুলো components থাকতে পারে। যার মানে হল কম্পনেন্ট দিয়েই আমরা সম্পূর্ণ একটা <strong>  React </strong> প্রজেক্ট তৈরি করতে পারি।

                    <h3>How <strong>React</strong> Works?</h3>
                    <strong>  React </strong> এ কাজ করার জন্য আমাদের  প্রথমেই দুইটা দেখেছে দরকার
                    1. <strong>React</strong>
                    2. <strong>React</strong> <strong><strong>DOM</strong></strong>
                    <strong>  React </strong>ে যখন আমরা <strong>  components </strong> লিখি এটা পিউর <strong>  JavaScript </strong> কোড থাকে। কারন আমরা এটা যে JAVASCRIPT ফাইল এর ভিতর লিখে থাকে। <strong>Components</strong> গুলো হয় ফাংশন অথবা ক্লাস হবে। আর যেগুলো <strong>  JavaScript </strong> ফাইল এর ভিতরেই লেখা হবে। আমরা <strong>  JavaScript </strong> ফাইল এর ভিতর <strong>JSX</strong> code লিখে থাকি।আর এই সম্পূর্ণ <strong>  JavaScript </strong> কোড টা কে <strong>HTML</strong> code এ কনভার্ট করার প্রয়োজন পড়ে। কারণ ওয়েবসাইট <strong> HTML </strong> কোড এর উপর ডিপেন্ড করে ইউজার ইন্টারফেস শো করবে। আলটিমেটলি webpage পেজে আমার যা দেখি সবকিছু <strong>HTML</strong> code. আমরা উপরের দুইটা প্যাকেজের কথা বলেছিলাম  <strong>React</strong> এবং <strong>React</strong> <strong><strong>DOM</strong></strong>। এই Javascript code কে <strong>HTML</strong> code  এ কনভার্ট করার সময় আমাদের <strong>React</strong> package টা কাজে লেগে থাকে। <strong>React</strong> একটা Component কে সরাসরি <strong>HTML</strong> code এ কনভার্ট করে থাকে। কনভার্ট করার পর আমাদের কে <strong> HTML </strong> ফাইল এর মাধ্যমে ওয়েবসাইটে আমাদের code কে show করতে হবে। যার কারণে index.<strong>HTML</strong>  ফাইল এর ভিতরে আমাদের <strong>  JavaScript </strong> কোড গুলোকে ইনজেক্ট করতে হয়। আরে ইঞ্জেক্ট কাজটা করা হয় সম্পূর্ণ <strong>React</strong> <strong><strong>DOM</strong></strong> package এর মাধ্যমে।  <strong><strong>DOM</strong></strong> হচ্ছে document object model।  যখন কোন একটা <strong> HTML </strong> ফাইল ওয়েবসিতে ক্রিয়েট হয়, তার সাথে সাথে ঔ ফাইলের একটা মডেল  ক্রিয়েট হয় যাকে ডকুমেন্ট অবজেক্ট মডেল বলা হয়।তারপর <strong>  React </strong> এবং দম আমার <strong> HTML </strong> কোড কে (যে কোডটা কম্পনেন্ট থেকে কনভার্ট করে এসেছে মেলে আনা হয়েছে)   মেইন <strong>HTML</strong> file এ ইঞ্জেক্ট করতে সাহায্য করে।আরে পুরো প্রসেসটা Page reload না হয়ে চলে । মানে পেইজ রিলোড ছাড়াই আমার <strong> HTML </strong> ফাইল গুলো <strong>  React </strong> ডোমের মাধ্যমে ডাইনামিক ভাবে ক্রিয়েট হয়। এই কারণে <strong>  React </strong> ফাস্ট এবং ইন্সট্যান্টলি কাজ করে।</p>
            </div>
            <div className='qsn-container'>
                <h1 className='qsn'>Props vs State in react!</h1>
                <p>
                    <strong>What is props?</strong>
                    <br></br>

                    Properties  এর শর্ট ফর্ম হল props। আর যেটা ইউজ করা হয় আর Data pass করার জন্য <strong>  React </strong> <strong>Components</strong> এর মধ্যে।এখানে uni-directional data flow হয়ে থাকে।যার মানে pass data from parent to child only।

                    <br></br>
                    <br></br>
                    <strong> What is State?</strong>
                    <br></br>
                    React এর built-in-object হলো state।যেটা component এর dta create and manage করতে সাহায্য করে থাকে।so, unlike props, components can't pass data with state, bit they can create and manage it internally.




                    <br></br>
                    <br></br>
                    <strong>Differents between props ans state...</strong>
                    <br></br>
                    আমরা যখন <strong>Components</strong> কে কল করি তখন আমরা <strong>Props</strong> কে ওই <strong>Components</strong>ে সেন্ড করতে পারি। অপরদিকে <strong>State</strong> হচ্ছে কোন একটা <strong>Components</strong> এর নিজস্ব ভ্যালু অবজেক্ট। <strong>State</strong> এর ভ্যালু উপর ডিপেন্ড করে <strong>Components</strong> টা বারবার রেন্ডার হতে থাকবে। আমরা <strong>State</strong> চেঞ্জ করতে পারব কিন্তু <strong>Props</strong> চেঞ্জ করতে পারবোনা। আসলে তাদের মধ্যে <strong> realstion </strong> টা কোথায়? এটা হলো আমরা যখন স্টেইটের ভ্যালু চেঞ্জ করতেছি ওই <strong> changes </strong> ভ্যালুটা আমরা <strong>Props</strong>এর মাধ্যমে আবার <strong>Components</strong> এ সেন্ড করতে পারি। এখানে <strong>State </strong> এর
                    বেলু চেঞ্জ হচ্ছে কিন্তু <strong>Props</strong> চেঞ্জ হচ্ছে না।
                    কম্পনেন্ট <strong>Props</strong>এর মাধ্যমে ডাটা রিসিভ করে এবং ওই ডাটা কে <strong> Manage and Create </strong> করে সাইটের মাধ্যমে। <strong>Props</strong> টা <strong> Read Only </strong>, যেটাকে আমরা চেঞ্জ করতে পারব না, কিন্তু এইটার ডাঁটা  চেঞ্জ করতে পারি। <strong>State</strong> <strong>Private</strong> যার ফলে এটা <strong>outside</strong> থেকে অ্যাক্সেস করা যাবে না। <strong>Props </strong> can only be passed from parent component to child which allow's unidirectional follow.</p>
            </div>
        </div>



    );
};

export default Questions;