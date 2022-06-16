import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { HomeWrapper, Img, Img2, InnerWrapper1, InnerWrapper2 } from './styles'
import { gsap } from 'gsap'
import { Flip } from 'gsap/dist/Flip'
gsap.registerPlugin(Flip)

export const HomePage = ({ peoples }) => {
    const router = useRouter()
    const [isActive, setIsActive] = useState()
    const el = useRef();
    const q = gsap.utils.selector(el);
    const items = gsap.utils.toArray(peoples);

    const [layout, setLayout] = useState(() => ({
        state: null,
        setup1: [...items],
        setup2: []
    }));

    useEffect(() => {
        if (!layout.state) return;

        Flip.from(layout.state, {
            targets: q(".img"),
            absolute: q(".img"),
            ease: "power2.inOut",
            duration: 1
        });
    }, [layout, q]);

    const swap = () => {
        let state = Flip.getState(q(".img"));

        if (layout.setup1.length) {
            setLayout({
                setup2: layout.setup1,
                setup1: [],
                state
            });
        } else {
            setLayout({
                setup1: layout.setup2,
                setup2: [],
                state
            });
        }
    };

    return (
        <>
            <HomeWrapper ref={el}>
                <InnerWrapper1>
                    {layout.setup1.map((person, idx) => {
                        const { id, title, src, name } = person
                        return (
                            <Img
                                key={id}
                                data-flip-id={id}
                                src={src}
                                id={name}
                                alt={title}
                                onClick={(e) => {
                                    e.preventDefault()
                                    swap()
                                    setIsActive(idx)
                                    setTimeout(() => {
                                        router.push({
                                            pathname: "/people/[id]",
                                            query: { id: id }
                                        })
                                    }, 900)
                                }}
                                className={`img ${idx === isActive && 'active'}`}
                            />
                        )
                    })}
                </InnerWrapper1>
                <InnerWrapper2>
                    {layout.setup2.map((person, idx) => {
                        const { id, title, src } = person
                        return (
                            <Img2
                                key={id}
                                data-flip-id={id}
                                src={src}
                                alt={title}
                                onClick={() => { swap(); setIsActive(idx) }}
                                className={`img ${idx === isActive && 'active'}`}
                            />
                        )
                    })}
                </InnerWrapper2>
            </HomeWrapper>
        </>
    )
}
