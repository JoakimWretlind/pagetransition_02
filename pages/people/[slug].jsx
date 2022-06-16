import path from 'path'
import fs from 'fs/promises'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SlugWrapper, ImgLanding, NameContainer, H1, P, Img1, Img3, TextContainer } from '../../components/peopleSection/slugPage/styles'

gsap.registerPlugin(ScrollTrigger)

const PeopleDetails = (props) => {
    const { loadedPerson } = props

    if (!loadedPerson) {
        return <p>Loading...</p>
    }

    return (
        <div data-scroll-section>
            <SlugWrapper>
                <ImgLanding
                    src={loadedPerson.src}
                    alt={loadedPerson.title} />
                {/* <NameContainer>
                    <H1>{loadedPerson.firstName}</H1>
                    <H1>{loadedPerson.lastName}</H1>
                    <P>{loadedPerson.description}</P>
                </NameContainer>
                <Img1 src={loadedPerson.src2} alt={loadedPerson.title} />
                <Img3 src={loadedPerson.src3} alt={loadedPerson.title} /> */}
            </SlugWrapper>
        </div >
    )
}

/** Get Data **/
const getData = async () => {
    const filePath = path.join(process.cwd(), 'utils', 'data', 'peopleData.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return data
}

export const getStaticProps = async (context) => {
    const { params } = context
    const peopleId = params.slug
    const data = await getData()
    const person = data.peoples.find(person => person.id === peopleId)

    if (!person) {
        return { notFound: true }
    }

    return {
        props: {
            loadedPerson: person
        }
    }
}

export const getStaticPaths = async () => {
    const data = await getData();
    const ids = data.peoples.map(person => person.id)
    const pathsWithParams = ids.map(id => ({ params: { slug: id } }))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export default PeopleDetails