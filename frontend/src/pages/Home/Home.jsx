import React from 'react'
import Hero from '../../components/Hero/Hero'
import ProductsCatalog from '../../components/ProductsCatalog/ProductsCatalog'
import Materials from '../../components/Materials/Materials'
import IndustrySolutions from '../../components/IndustrySolutions/IndustrySolutions'
import ProjectsAcrossIndia from '../../components/ProjectsAcrossIndia/ProjectsAcrossIndia'
import ConceptToCompletion from '../../components/ConceptToCompletion/ConceptToCompletion'
import ManufacturedWithPrecision from '../../components/ManufacturedWithPrecision/ManufacturedWithPrecision'
import MarqueeText from '../../components/Marquee/MarqueeText'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import Feedback from '../../components/Feedback/Feedback'
import InsightsResources from '../../components/InsightsResources/InsightsResources'
import HomeFAQ from '../../components/HomeFAQ/HomeFAQ'

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="after-why-developers">
                <ProductsCatalog showTitle={true} />
                <Materials />
                <IndustrySolutions />
                <ProjectsAcrossIndia />
                <Activities />
                <ConceptToCompletion />
                <ManufacturedWithPrecision />
                <Feedback />
                <InsightsResources />
                <HomeFAQ />
            </div>
        </div>
    )
}

export default Home