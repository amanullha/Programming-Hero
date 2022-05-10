import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-full md:w-10/12 mx-auto my-20'>

                <div className='bg-green-800 bg-opacity-20 py-10 px-5'>
                    <h1 className='text-2xl font-bold text-green-700'>difference between authorization and Authentication?</h1>

                    <div className='pl-5'>
                        <h1 className='text-xl font-bold mt-5'>Authentication: </h1>
                        <p>
                            Authentication is tied in with approving your qualifications like User Name/User ID and secret word to check your personality. The framework decides if you are what you say you are utilizing your certifications. Openly and private organizations, the framework verifies the client character by means of login passwords. Confirmation is normally finished by a username and secret key, and once in a while related to variables of Authentication, which alludes to the different ways of being validated.

                            Authentication factors decide the different components the framework use to check one's personality preceding allowing him admittance to anything from getting to a record to mentioning a bank exchange. A client's character not set in stone by what he knows, what he has, for sure he is. With regards to security, somewhere around two or all the three validation factors should be confirmed to give somebody admittance to the framework.
                        </p>


                        <h1 className='text-xl font-bold mt-5'>Authorization</h1>
                        <p>
                            Authorization, then again, happens after your character is effectively confirmed by the framework, which at last gives you full consent to get to the assets like data, documents, information bases, reserves, areas, nearly anything. In straightforward terms, Authorization decides your capacity to get to the framework and up how much. When your character is checked by the framework after fruitful verification, you are then approved to get to the assets of the framework.

                            Authorization is the interaction to decide if the confirmed client approaches the specific assets. It checks your freedoms to allow you admittance to assets like data, data sets, documents, and so forth. Authorization normally comes after verification which affirms your honors to perform. In straightforward terms, it resembles allowing somebody official to follow through with something or anything.




                        </p>
                    </div>
                </div>

                <div className='bg-green-800 bg-opacity-20 py-10 px-5 mt-10'>
                    <h1 className='text-2xl font-bold text-green-700'>Why are you using firebase? What other options do you have to implement authentication?</h1>

                    <div className='pl-5'>
                        <p className='mt-5'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.</p>

                        <p className='mt-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>



                    </div>
                </div>

                <div className='bg-green-800 bg-opacity-20 py-10 px-5 mt-10'>
                    <h1 className='text-2xl font-bold text-green-700'>What other services does firebase provide other than authentication</h1>

                    <div className='ml-2 mt-2'>
                        <h1>Single-Factor/Primary Authentication</h1>
                        <h1>Two-Factor Authentication (2FA)</h1>
                        <h1> Single Sign-On (SSO)</h1>
                        <h1> Multi-Factor Authentication (MFA)</h1>
                        <h1>Password Authentication Protocol (PAP)</h1>
                        <h1>Challenge Handshake Authentication Protocol (CHAP)</h1>
                        <h1>Extensible Authentication Protocol (EAP)</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;