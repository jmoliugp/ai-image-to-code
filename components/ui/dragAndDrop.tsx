import { Dropzone, ExtFile } from '@files-ui/react'
import React from 'react'

interface Props {
  transformImageToCode: (file: File) => Promise<void>
}

export const DragAndDrop: React.FC<Props> = ({ transformImageToCode }) => {
  const updateFiles = (files: ExtFile[]) => {
    const file = files[0].file
    if (file == null) return

    transformImageToCode(file)
  }

  return <Dropzone header={false} footer={false} maxFiles={1} accept="image/*" onChange={updateFiles} />
}
