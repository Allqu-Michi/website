import React from 'react'

function Switch() {
    return (
        <React.Fragment>
            <label class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="transition-all duration-500 w-11 h-6 bg-white rounded-full peer peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-blue after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-orange after:peer-checked:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all absolute peer-checked:bg-orange"></div>
            </label>
        </React.Fragment>
    )
}

export default Switch