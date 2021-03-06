import Container from '../container'
import Button from '../button'
import SectionHeader from '../section-header'
import CompanySlider from './company-slider'

export default () => <Container wide role='region' aria-labelledby='features'>
  <Container center padding>
    <SectionHeader id='features' title='Why Next.js' description='The world’s leading companies use and love Next.js'/>
    <div className="row">
      <div className="column">
        <h3 className="f3 fw6">Zero Setup</h3>
        <p>Automatic code splitting, filesystem based routing, hot code reloading and universal rendering.</p>
        <Button href="/learn">Learn Next.js</Button>
      </div>
      <div className="column">
        <h3 className="f3 fw6">Fully Extensible</h3>
        <p>Complete control over Babel and Webpack. Customizable server, routing and next-plugins.</p>
        <Button href="/docs">View Full Documentation</Button>
      </div>
      <div className="column">
        <h3 className="f3 fw6">Ready for Production</h3>
        <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
        <Button href="/showcase">View Showcase</Button>
      </div>
    </div>
    <style jsx>{`
      .column {
        text-align: left;
      }
      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }
        .column {
          width: 100%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 350px;
        }
      }
    `}</style>
  </Container>
  <CompanySlider/>
</Container>
