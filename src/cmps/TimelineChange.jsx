
export function TimelineChange({ selectedTimeline, setSelectedTimeline }) {
    return (
        <div className="timeline-change-container">
            <span className={selectedTimeline === 7 ? 'selected' : ''} onClick={() => setSelectedTimeline(7)}>7D</span>
            <span className={selectedTimeline === 30 ? 'selected' : ''} onClick={() => setSelectedTimeline(30)}>30D</span>
            <span className={selectedTimeline === 180 ? 'selected' : ''} onClick={() => setSelectedTimeline(180)}>180D</span>
            <span className={selectedTimeline === 365 ? 'selected' : ''} onClick={() => setSelectedTimeline(365)}>1Y</span>
        </div>
    )
}
