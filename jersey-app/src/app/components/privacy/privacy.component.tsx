import { PrivacyDataType } from "@/app/web/components/static-data/staticData";
import Box from "@mui/material/Box";
import DOMPurify from "dompurify";
import Typography from "@mui/material/Typography";
import { FC, useEffect, useState } from "react";

interface IPrivacyProps {
  privacyData: PrivacyDataType[];
}

export const PrivacyComponent: FC<IPrivacyProps> = (props) => {
  const { privacyData } = props;
  const [privacyState, setPrivacyState] = useState<PrivacyDataType[]>();

  useEffect(() => {
    setPrivacyState(privacyData);
  }, [privacyData]);

  return (
    <Box pb={6} color={"var(--app-text-color-dark)"}>
      {privacyState?.map((p) => (
        <Box key={p.id}>
          <Typography fontSize={24} fontWeight={600} sx={{ my: 4 }}>
            {p.title}
          </Typography>

          {p.content && (
            <>
              {p.content.map((c) => (
                <Box key={c.id} py={2}>
                  <Typography fontSize={16} fontWeight={600} gutterBottom>
                    {c.contentTitle}
                  </Typography>

                  {/* SubContent */}
                  {c.subContent && (
                    <Typography
                      pl={2}
                      fontSize={16}
                      variant="body1"
                      gutterBottom
                      component="div"
                    >
                      <ul
                        style={{
                          listStyleType: "disc",
                          fontSize: "1.2rem",
                          paddingLeft: "1.5rem",
                        }}
                      >
                        {c.subContent.map((subC, i) => (
                          <li key={i}>
                            <Typography variant="body1">
                              {" "}
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: DOMPurify.sanitize(subC),
                                }}
                              />
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </Typography>
                  )}
                </Box>
              ))}
            </>
          )}
        </Box>
      ))}

    </Box>
  );
};
