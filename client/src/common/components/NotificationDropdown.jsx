import React from 'react'

function NotificationDropdown({ setShowNotificatios }) {
    return (
        <>
            <main
            onm
                onMouseEnter={() => setShowNotification(true)}
                onMouseLeave={() => setShowNotification(false)}
                className='bg-accent rounded-3xl p-5 absolute  top-25 w-1/6 right-20'>
                Notifications will be shown here
            </main>
        </>
    )
}

export default NotificationDropdown