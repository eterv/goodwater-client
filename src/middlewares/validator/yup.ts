import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: '${path} 필드는 반드시 필요합니다',
    notType(ref: yup.ValidationError) {
      switch (ref.type) {
        case 'number':
          return `${ref.path} 필드는 숫자 형식이어야 합니다`
        default:
          return `${ref.path} 필드는 형식이 올바르지 않습니다`
      }
    },
  },
  string: {
    email: '${path} 필드는 올바른 이메일 형태이어야 합니다',
    max: '${path} 필드는 최대 ${max} 자 이하이어야 합니다',
    min: '${path} 필드는 최소 ${min} 자 이상이어야 합니다',
  },
})

export const userRules = {
  email: yup
    .string()
    .label('이메일')
    .required()
    .email(),
  name: yup
    .string()
    .label('이름')
    .required()
    .min(2)
    .max(50),
  pw: yup
    .string()
    .label('비밀번호')
    .required()
    .max(64),
  tel: yup
    .string()
    .label('전화번호')
    .required()
    .matches(
      /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
      '전화번호를 올바로 입력해주세요'
    ),
}

export default yup
