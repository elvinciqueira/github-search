import {Flex} from '../../foundation/layout/Flex'

export default function Header({leftContent, centerContent, rightContent}) {
  return (
    <Flex as="header" justifyContent="space-between" p={4} alignItems="center">
      {leftContent}
      {centerContent}
      {rightContent}
    </Flex>
  )
}
