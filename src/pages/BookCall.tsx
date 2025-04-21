
import React from 'react';
import BookCallForm from '@/components/BookCallForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BookCall = () => {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BookCallForm />
      </main>
      <Footer />
    </div>
  );
};

export default BookCall;
