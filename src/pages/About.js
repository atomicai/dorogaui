import { useAtom } from 'jotai'

import { participantsAtom } from '../store/about.atom'

// About Page
export default function About() {
  const [data] = useAtom(participantsAtom)

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-top py-16">
      <h1 className="text-3xl font-bold">Our Team</h1>
      <div className="grid gap-16 py-16 sm:grid-cols-2">
        {data.participants.map((participant, indexParticipant) => (
          <div
            key={indexParticipant}
            className="card card-side h-72 bg-base-100 shadow-xl"
          >
            <figure className="avatar w-72">
              <img src={participant.image} alt={`Participant's avatar`} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{participant.name}</h2>
              <p className="text-2xl">{participant.role}</p>
              <div className="card-actions justify-end">
                {participant.skills.map((skill, indexSkill) => (
                  <div
                    key={`${indexParticipant}.${indexSkill}`}
                    className="badge badge-outline badge-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
