import React from 'react';

const Tgb = ({ theme, setTheme }) => {

    function change() {
        setTheme(!theme);
    }

    return (
        <div className='ml-8 mb-5'>

            <div
                onClick={change}
                className={
`{
h-8 w-18 rounded-2xl border relative cursor-pointer
${theme?'bg-green-400':'bg-gray-400'}
}`


                }
            >

                <div
                    className={`h-4 w-4 rounded-full bg-white absolute  border-gray-500 top-1.5 transition-all duration-300 ${
                        theme ? 'left-11' : 'left-2'
                    }`}
                >
                </div>

            </div>

        </div>
    );
};

export default Tgb;