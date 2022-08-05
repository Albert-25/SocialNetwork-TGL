import React from 'react'

import { HomeLayout } from '../layout/HomeLayout'
import { CardPhotos } from '../layout/profile/CardPhotos'
import { CarouselProfile } from '../layout/profile/CarouselProfile'
// import { FormProfile } from '../layout/profile/FormProfile'
import { Header } from '../layout/profile/Header'
import { OptionCount } from '../layout/profile/OptionCount'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useHomeStore } from '../../../hooks/useHomeStore'
import { useSelector } from 'react-redux'

export const ProfilePageOfOneUser = () => {
  const { sendPathHook } = useHomeStore()
  const location = useLocation();
  const { lastUserVisited } = useSelector(state => state.home)

  useEffect(() => {
    sendPathHook(location.pathname)
  }, [lastUserVisited])

  return (
    <HomeLayout >
      <div>
        <Header />
        <CarouselProfile />
        <CardPhotos />
        <OptionCount />
      </div>

    </HomeLayout>
  )
}
