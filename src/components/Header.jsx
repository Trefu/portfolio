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
                    <span className='text-xl md:text-4xl text-left'>Soy un desarrollador front-end,
                        Especializandose en Javascript 🖱</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -400))}>
                    <span className='text-xl md:text-4xl'>Comencé a aprender desarrollo web como autodidacta a principios del año 2020 🎇</span>
                </Animator>

            </ScrollPage>
            <ScrollPage page={3}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(-200, -400))}>
                    <div className='text-left '>
                        <span className='text-xl md:text-4xl'>
                            Actualmente trabajo como freelancer y pero busco incorporarme en una empresa para desarrollarme más como programador y adquirir experiencia
                        </span>
                    </div>
                </Animator>
            </ScrollPage >
            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 0))}>
                    <div className='text-right  text-2xl md:text-4xl '>
                        <span >
                            Mis tecnologías son
                        </span>
                        <Animator animation={MoveIn(0, 200)}>
                            JS,Html,Css,Nodejs y MongoDB y estos son algunos de mis proyectos 🎨
                        </Animator>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer >

    );
};
