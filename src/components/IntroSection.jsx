import React from "react";
// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Полезные советы</h1>
//             <h3 className="centered" style={{color: '#666'}}>для новичков в программировании,
//                 чтобы не выгореть
//             </h3>
//         </section>
//     )
// }

const e = React.createElement

export default function IntroSection() {
    return e('section', null,
        [e('h1', {className: 'centered', key: 1}, 'Полезные советы'),
            e('h3', {
                className: 'centered',
                style: {color: '#666'}, key: 2},
                'для новичков в программировании,чтобы не выгореть')
        ])
}