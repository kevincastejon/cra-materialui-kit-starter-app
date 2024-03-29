import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components

import profile from '../../assets/img/faces/christian.jpg';

import studio1 from '../../assets/img/examples/studio-1.jpg';
import studio2 from '../../assets/img/examples/studio-2.jpg';
import studio3 from '../../assets/img/examples/studio-3.jpg';
import studio4 from '../../assets/img/examples/studio-4.jpg';
import studio5 from '../../assets/img/examples/studio-5.jpg';
import work1 from '../../assets/img/examples/olu-eletu.jpg';
import work2 from '../../assets/img/examples/clem-onojeghuo.jpg';
import work3 from '../../assets/img/examples/cynthia-del-rio.jpg';
import work4 from '../../assets/img/examples/mariya-georgieva.jpg';
import work5 from '../../assets/img/examples/clem-onojegaw.jpg';

import styles from '../../assets/jss/material-kit-react/views/profilePage';
import Parallax from '../../components/Parallax/Parallax';
import NavPills from '../../components/NavPills/NavPills';
import HeaderLinks from '../../components/Header/HeaderLinks';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Button from '../../components/CustomButtons/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image={require('../../assets/img/profile-bg.jpg')} />
      <div>
        <div>
          <div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div>
                    <h3>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon link>
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button justIcon link>
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
                {' '}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: 'Studio',
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Work',
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Favorite',
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
