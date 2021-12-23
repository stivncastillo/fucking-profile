import React from "react";

export interface IconProps {
  width: number;
  height: number;
  fillColor: string;
}

export const TwitterIcon: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>twitter</title>
      <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
    </svg>
  );
};

export const LinkedinIcon: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>linkedin</title>
      <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
    </svg>
  );
};

export const GithubIcon: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>github</title>
      <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
    </svg>
  );
};

export const DribbbleIcon: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>dribbble</title>
      <path d="M16 32c-8.825 0-16-7.175-16-16s7.175-16 16-16c8.825 0 16 7.175 16 16s-7.175 16-16 16v0zM29.494 18.188c-0.469-0.15-4.231-1.269-8.512-0.581 1.788 4.912 2.512 8.912 2.656 9.744 3.063-2.075 5.25-5.356 5.856-9.163v0zM21.337 28.6c-0.206-1.2-0.994-5.375-2.913-10.363-0.031 0.012-0.063 0.019-0.087 0.031-7.713 2.688-10.481 8.031-10.725 8.531 2.319 1.806 5.231 2.887 8.387 2.887 1.894 0 3.7-0.387 5.338-1.087v0zM5.844 25.156c0.313-0.531 4.063-6.738 11.106-9.019 0.175-0.056 0.356-0.113 0.538-0.162-0.344-0.775-0.719-1.556-1.106-2.319-6.819 2.044-13.444 1.956-14.044 1.95-0.006 0.137-0.006 0.275-0.006 0.419 0 3.506 1.331 6.712 3.512 9.131v0zM2.625 13.219c0.612 0.006 6.244 0.031 12.637-1.662-2.262-4.025-4.706-7.412-5.069-7.906-3.825 1.806-6.688 5.331-7.569 9.569v0zM12.8 2.731c0.375 0.506 2.863 3.888 5.1 8 4.863-1.819 6.919-4.588 7.163-4.938-2.413-2.144-5.587-3.444-9.063-3.444-1.1 0.006-2.175 0.138-3.2 0.381v0zM26.581 7.381c-0.288 0.388-2.581 3.325-7.631 5.388 0.319 0.65 0.625 1.313 0.906 1.981 0.1 0.238 0.2 0.469 0.294 0.706 4.55-0.569 9.069 0.344 9.519 0.438-0.031-3.225-1.188-6.188-3.087-8.512v0z"></path>
    </svg>
  );
};

export const EnvelopeIcon: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <title>enveloper</title>
      <path d="M18 2c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h16zM13.63 11.1l6.37 4.9v-2l-5.12-3.9 5.12-4.1v-2l-10 8-10-8v2l5.12 4.1-5.12 3.9v2l6.37-4.9 3.63 2.9 3.63-2.9z"></path>
    </svg>
  );
};

export const UserIcon: React.FC<IconProps> = ({ width, height, fillColor }) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 28"
    >
      <title>user</title>
      <path d="M18.766 12.25c2.203 0.641 5.234 2.812 5.234 9.922 0 3.219-2.391 5.828-5.328 5.828h-13.344c-2.938 0-5.328-2.609-5.328-5.828 0-7.109 3.031-9.281 5.234-9.922-0.781-1.234-1.234-2.688-1.234-4.25 0-4.406 3.594-8 8-8s8 3.594 8 8c0 1.563-0.453 3.016-1.234 4.25zM12 2c-3.313 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zM18.672 26c1.828 0 3.328-1.703 3.328-3.828 0-4.922-1.656-8-4.75-8.156-1.406 1.234-3.234 1.984-5.25 1.984s-3.844-0.75-5.25-1.984c-3.094 0.156-4.75 3.234-4.75 8.156 0 2.125 1.5 3.828 3.328 3.828h13.344z"></path>
    </svg>
  );
};

export const CodeIcon: React.FC<IconProps> = ({ width, height, fillColor }) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 28"
    >
      <title>code</title>
      <path d="M9.641 21.859l-0.781 0.781c-0.203 0.203-0.516 0.203-0.719 0l-7.281-7.281c-0.203-0.203-0.203-0.516 0-0.719l7.281-7.281c0.203-0.203 0.516-0.203 0.719 0l0.781 0.781c0.203 0.203 0.203 0.516 0 0.719l-6.141 6.141 6.141 6.141c0.203 0.203 0.203 0.516 0 0.719zM18.875 5.187l-5.828 20.172c-0.078 0.266-0.359 0.422-0.609 0.344l-0.969-0.266c-0.266-0.078-0.422-0.359-0.344-0.625l5.828-20.172c0.078-0.266 0.359-0.422 0.609-0.344l0.969 0.266c0.266 0.078 0.422 0.359 0.344 0.625zM29.141 15.359l-7.281 7.281c-0.203 0.203-0.516 0.203-0.719 0l-0.781-0.781c-0.203-0.203-0.203-0.516 0-0.719l6.141-6.141-6.141-6.141c-0.203-0.203-0.203-0.516 0-0.719l0.781-0.781c0.203-0.203 0.516-0.203 0.719 0l7.281 7.281c0.203 0.203 0.203 0.516 0 0.719z"></path>
    </svg>
  );
};

export const ShareIcon: React.FC<IconProps> = ({
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      className={fillColor}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
    >
      <title>share</title>
      <path d="M22 14.5v5c0 2.484-2.016 4.5-4.5 4.5h-13c-2.484 0-4.5-2.016-4.5-4.5v-13c0-2.484 2.016-4.5 4.5-4.5h11c0.281 0 0.5 0.219 0.5 0.5v1c0 0.281-0.219 0.5-0.5 0.5h-11c-1.375 0-2.5 1.125-2.5 2.5v13c0 1.375 1.125 2.5 2.5 2.5h13c1.375 0 2.5-1.125 2.5-2.5v-5c0-0.281 0.219-0.5 0.5-0.5h1c0.281 0 0.5 0.219 0.5 0.5zM28 1v8c0 0.547-0.453 1-1 1-0.266 0-0.516-0.109-0.703-0.297l-2.75-2.75-10.187 10.187c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-1.781-1.781c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l10.187-10.187-2.75-2.75c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h8c0.547 0 1 0.453 1 1z"></path>
    </svg>
  );
};

export const FilterIcons: { [key: string]: React.FC<IconProps> } = {
  CodeIcon,
  UserIcon,
};
