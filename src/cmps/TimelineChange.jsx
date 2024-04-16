
export function TimelineChange({ currentTimeline, setCurrentTimeline }) {
    return (
        <div className="timeline-change-container">
            <span className={currentTimeline === 7 ? 'selected' : ''} onClick={() => setCurrentTimeline(7)}>7D</span>
            <span className={currentTimeline === 30 ? 'selected' : ''} onClick={() => setCurrentTimeline(30)}>30D</span>
            <span className={currentTimeline === 180 ? 'selected' : ''} onClick={() => setCurrentTimeline(180)}>180D</span>
            <span className={currentTimeline === 365 ? 'selected' : ''} onClick={() => setCurrentTimeline(365)}>1Y</span>
        </div>
    )
}
