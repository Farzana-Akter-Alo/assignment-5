# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## getElementById কী?

getElementById হচ্ছে একটি সিলেক্টর, যা কোনো element এর Id কে সিলেক্ট করে তা return করতে সাহায্য করে।

## getElementsByClassName কী?

একই class name এর যত element আছে সে সবগুলোকে এক সাথে select করা হয় getElementsByClassName এর মাধ্যমে।

## querySelector / querySelectorAll কী?

querySelector css selector ব্যবহার করে element খুঁজে পেতে সাহায্য করে।
এবং querySelectorAll css selector ব্যবহার করে সব element খুঁজে পেতে সাহায্য করে।

# How do you create and insert a new element into the DOM?

DOM এর মধ্যে নতুন element create করার জন্য createElement() ব্যবহার করা হয়। এবং তা insert করার জন্য appendChild() ব্যবহার করা হয়।

# What is Event Bubbling and how does it work?

Event Bubbling হলো একটি propagation প্রক্রিয়া , child element এ কোন Event add করলে তা parent element পর্যন্ত চলে যায়।

# What is Event Delegation in JavaScript? Why is it useful?

Event Delegation এমন একটি প্রক্রিয়া যেখানে প্রত্যেকটা child element এ event listener আলাদা আলাদা না বসিয়ে আমরা parent element এ একবার event listener বসিয়ে
child এর event কে handle করতে পারি। এতে সময় কম লাগে ।

# What is the difference between preventDefault() and stopPropagation() methods?

কোনো element এ Event দেওয়ার পর পেজটি reload হয়। এটি বন্ধ করতে preventDefault() ব্যবহার করা হয়।

child element এ কোন Event add করার পর তার Event Bubbling বন্ধ করতে stopPropagation() ব্যবহার করা হয়।
