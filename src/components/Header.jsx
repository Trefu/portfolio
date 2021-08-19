import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky } from "react-scroll-motion";

export const Header = () => {

    return (



        <ScrollContainer>

            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <span className='text-xl md:text-4xl mr-16'>Hola!, soy Trefu 😀</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -200))}>
                    <span className='text-xl md:text-4xl text-left'>Soy un desarrollador web! ✨</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -400))}>
                    <span className='text-xl md:text-4xl'>Especializandose en Javascript 🖱</span>
                </Animator>

            </ScrollPage>
            <ScrollPage page={3}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(-200, -400))}>
                    <div className='text-left '>
                        <span className='text-xl md:text-4xl'>
                            Comencé a aprender desarrollo web como autodidacta en 2020
                        </span>
                    </div>
                </Animator>
            </ScrollPage >
            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 0))}>
                    <div className='text-right  text-2xl md:text-4xl '>
                        <span >
                            Y mis tecnologias son
                        </span>
                        <Animator animation={MoveIn(0, 200)}>
                            JS,HTML,Css,Nodejs y MongoDB
                        </Animator>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer >

    );
};
