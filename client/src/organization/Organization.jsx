import SideBar from '@/common/components/SideBar'
import React from 'react'
import OrganizationHome from './OrganizationHome'

function Organization() {
  return (
    <>
        <main className="grid grid-cols-7 gap-1">
            <SideBar currentTab={'home'} currentType='organizationMenu' />
            <section className="col-span-6">
                <OrganizationHome/>
            </section>
        </main>
    </>
  )
}

export default Organization