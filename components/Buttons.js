export default function Buttons() {
    return(
        <>
            <div className="flex gap-4 bg-light-gray shadow-xl rounded-2xl place-content-center w-96 mb-8">
                <a href="https://github.com/soetch" className="cursor-pointer hover:scale-110" type="button">
                    <div className="grid box-border bg-gray-700 rounded-2xl h-12 w-12 shadow-xl place-content-center mt-2 hover:bg-gray-400">
                        <div className="flex gap-9 text-center text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-900" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clipRule="evenodd"/></svg>
                        </div>
                    </div>
                </a>
                <a href="https://soundcloud.com/soetch" className="cursor-pointer hover:scale-110" type="button">
                    <div className="grid box-border bg-gray-700 rounded-2xl h-12 w-12 shadow-xl place-content-center mt-2 hover:bg-orange-600">
                        <div className="flex gap-9 text-center text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="text-gray-900" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M13.937 8.034c-.283 0-.552.055-.798.154C12.975 6.401 11.416 5 9.514 5c-.465 0-.917.088-1.317.237c-.156.058-.197.117-.197.233v6.292c0 .121.098.222.221.234l5.717.003c1.139 0 2.062-.888 2.062-1.983s-.924-1.983-2.063-1.983zM6.25 12h.5L7 8.497L6.75 5h-.5L6 8.497zm-1.5 0h-.5L4 9.457L4.25 7h.5L5 9.5zm-2.5 0h.5L3 10l-.25-2h-.5L2 10zm-2-1h.5L1 10L.75 9h-.5L0 10z"/></svg>
                        </div>
                    </div>
                </a>
                <a href="https://open.spotify.com/artist/4YB96IAGiNVf375DQRqcz0?si=dXRFrm6SRoCRSpKyDjBq_Q" className="cursor-pointer hover:scale-110" type="button">
                    <div className="grid box-border bg-gray-700 rounded-2xl h-12 w-12 shadow-xl place-content-center mt-2 mb-2 hover:bg-green-500">
                        <div className="flex gap-5 text-center text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-900" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/></svg>
                        </div>
                    </div>
                </a>
                <a href="mailto:soetchdev@gmail.com" className="cursor-pointer hover:scale-110" type="button">
                    <div className="grid box-border bg-gray-700 rounded-2xl h-12 w-12 shadow-xl place-content-center mt-2 mb-2 hover:bg-blue-500">
                        <div className="flex gap-5 text-center text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-900" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M4 3a2 2 0 0 0-2 2v.201l6 3.231l6-3.23V5a2 2 0 0 0-2-2H4Zm10 3.337L8.237 9.44a.5.5 0 0 1-.474 0L2 6.337V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.337Z"/></svg>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}