import { ComponentPropsWithoutRef } from 'react'

const Correct = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M0 12C0 5.372 5.372 0 12 0s12 5.372 12 12-5.372 12-12 12S0 18.628 0 12Zm17.428-2.072a1.315 1.315 0 0 0 0-1.856 1.316 1.316 0 0 0-1.856 0L10.5 13.144l-2.072-2.072a1.315 1.315 0 0 0-1.856 0c-.511.51-.511 1.345 0 1.856l3 3c.51.511 1.345.511 1.856 0l6-6Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Correct
