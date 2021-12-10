// 커스텀 가능한 타입
export interface Position {
  latitude: number;
  longitude: number;
}
export interface Marker {
  position: Position;
  title?: string;
}

// 카카오 맵 API

// 백엔드 API

export interface Map {
  title: string;
  applicantLimit: number;
  deadline: string;
  content: string;
  location: string;
  latitude: number;
  longitude: number;
  meetingDateTime: string;
}
